
"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useEffect, useState, useRef } from "react";

import { toast } from "react-hot-toast";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { useSearchParams } from "next/navigation";
import swalHelper from "@/utils/swalHelper";
import { formatDate } from "@/utils/helpers/dateHelper";


function SupportPage() {
    const basicProvider = BasicProvider();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("history");
    const [tickets, setTickets] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedTickets, setSelectedTickets] = useState([]);
    const fileInputRef = useRef(null);
    const [filePreviews, setFilePreviews] = useState([]);

    const [formData, setFormData] = useState({
        subject: "",
        priority: "medium",
        message: "",
        gallery: []
    });

    const fetchTickets = async (page = 1) => {
        setLoading(true);
        try {
            const res = await basicProvider.getMethod(`public/support?page=${page}&count=10`);
            if (res.status === "success") {
                setTickets(res.data.data || []);
                setPagination(res.data);
            }
        } catch (error) {
            console.error("Error fetching tickets:", error);
            toast.error("Failed to load tickets");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const page = searchParams.get("page") || 1;
        fetchTickets(page);
    }, [searchParams]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedTickets(tickets.map(t => t._id));
        } else {
            setSelectedTickets([]);
        }
    };

    const handleSelect = (id) => {
        setSelectedTickets(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleDelete = async (id) => {
        const confirmed = await swalHelper.confirmDelete("Are you sure?", "You want to delete this ticket?");
        if (!confirmed) return;
        try {
            const res = await basicProvider.deleteMethod(`public/support/delete/${id}`);
            if (res.status === "success") {
                toast.success("Ticket deleted!");
                fetchTickets(pagination.page);
            } else {
                toast.error(res.message || "Failed to delete");
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("An error occurred");
        }
    };

    const handleBulkDelete = async () => {
        const confirmed = await swalHelper.confirmDelete(
            "Delete Selected?", 
            `You are about to delete ${selectedTickets.length} tickets.`
        );
        if (!confirmed) return;
        try {
            const res = await basicProvider.postMethod("public/support/multi-delete", selectedTickets);
            if (res.status === "success") {
                toast.success("Tickets deleted!");
                setSelectedTickets([]);
                fetchTickets(1);
            } else {
                toast.error(res.message || "Failed to delete");
            }
        } catch (error) {
            console.error("Bulk delete error:", error);
            toast.error("An error occurred");
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({ ...formData, gallery: files });
        
        // Generate previews
        const previews = files.map(file => URL.createObjectURL(file));
        setFilePreviews(previews);
    };

    const removeFile = (index) => {
        const newFiles = formData.gallery.filter((_, i) => i !== index);
        const newPreviews = filePreviews.filter((_, i) => i !== index);
        setFormData({ ...formData, gallery: newFiles });
        setFilePreviews(newPreviews);
    };

    const handleCreateTicket = async (e) => {
        e.preventDefault();
        if (!formData.subject || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }

        setIsSubmitting(true);
        try {
            const data = new FormData();
            data.append("subject", formData.subject);
            data.append("priority", formData.priority);
            data.append("message", formData.message);
            formData.gallery.forEach((file) => {
                data.append("gallery", file);
            });

            const res = await basicProvider.postMethod("public/support/create", data);
            if (res.status === "success") {
                toast.success("Support ticket created!");
                setFormData({ subject: "", priority: "medium", message: "", gallery: [] });
                setActiveTab("history");
                fetchTickets(1);
            } else {
                toast.error(res.message || "Failed to create ticket");
            }
        } catch (error) {
            console.error("Error creating ticket:", error);
            toast.error("An error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    const getStatusBadge = (status) => {
        const brands = {
            open: "bg-success-subtle text-success border-success-subtle",
            close: "bg-danger-subtle text-danger border-danger-subtle"
        };
        return <span className={`badge rounded-pill border px-3 py-1 fw-bold ${brands[status] || "bg-secondary-subtle text-secondary"}`}>{status.toUpperCase()}</span>;
    };

    const getPriorityBadge = (priority) => {
        const brands = {
            high: "bg-danger-subtle text-danger border-danger-subtle",
            medium: "bg-warning-subtle text-warning border-warning-subtle",
            low: "bg-info-subtle text-info border-info-subtle"
        };
        return <span className={`badge rounded-pill border px-2 py-1 small fw-bold ${brands[priority] || "bg-secondary-subtle text-secondary"}`}>{priority.toUpperCase()}</span>;
    };

    return (
        <main className="col-lg-9 ms-auto">
            <section className="my-account-content">
                <header className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
                    <div>
                        <h1 className="h4 fw-bold m-0 text-dark">Help & Support</h1>
                        <p className="text-muted mb-0 mt-1 small">
                            We're here to help you. Track your requests or start a new conversation.
                        </p>
                    </div>
                </header>

                <ul className="nav nav-pills bg-light p-1 rounded-pill mb-4 d-inline-flex border">
                    <li className="nav-item">
                        <button
                            className={`nav-link rounded-pill fw-bold px-4 py-2 ${activeTab === "history" ? "active shadow-sm" : "text-muted"}`}
                            onClick={() => setActiveTab("history")}
                        >
                            Support History
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link rounded-pill fw-bold px-4 py-2 ${activeTab === "new" ? "active shadow-sm" : "text-muted"}`}
                            onClick={() => setActiveTab("new")}
                        >
                            New Ticket
                        </button>
                    </li>
                </ul>

                {loading ? (
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : activeTab === "history" ? (
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="card-body p-0">
                            {tickets.length > 0 ? (
                                <>
                                    <div className="p-3 bg-light border-bottom d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="form-check me-3">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    onChange={handleSelectAll}
                                                    checked={selectedTickets.length === tickets.length && tickets.length > 0}
                                                />
                                            </div>
                                            <span className="small fw-bold text-muted">{selectedTickets.length} Selected</span>
                                        </div>
                                        {selectedTickets.length > 0 && (
                                            <button className="btn btn-sm btn-danger rounded-pill px-3" onClick={handleBulkDelete}>
                                                <i className="fa-solid fa-trash-can me-1"></i> Delete Selected
                                            </button>
                                        )}
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover align-middle mb-0">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th className="px-4 py-3" style={{ width: "40px" }}></th>
                                                    <th className="px-4 py-3 text-uppercase small fw-bold text-muted" style={{ width: "120px" }}>Ticket No</th>
                                                    <th className="px-4 py-3 text-uppercase small fw-bold text-muted">Subject</th>
                                                    <th className="px-4 py-3 text-uppercase small fw-bold text-muted text-center">Priority</th>
                                                    <th className="px-4 py-3 text-uppercase small fw-bold text-muted text-center">Status</th>
                                                    <th className="px-4 py-3 text-uppercase small fw-bold text-muted">Created Date</th>
                                                    <th className="px-4 py-3 text-uppercase small fw-bold text-muted text-end">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tickets.map((ticket) => (
                                                    <tr key={ticket._id} className="border-bottom-0">
                                                        <td className="px-4 py-3">
                                                            <div className="form-check">
                                                                <input 
                                                                    className="form-check-input" 
                                                                    type="checkbox" 
                                                                    checked={selectedTickets.includes(ticket._id)}
                                                                    onChange={() => handleSelect(ticket._id)}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 fw-bold text-primary">#{ticket.ticket_no}</td>
                                                        <td className="px-4 py-3">
                                                            <div className="fw-bold text-dark text-truncate" style={{ maxWidth: "200px" }}>{ticket.subject}</div>
                                                        </td>
                                                        <td className="px-4 py-3 text-center">{getPriorityBadge(ticket.priority)}</td>
                                                        <td className="px-4 py-3 text-center">{getStatusBadge(ticket.status)}</td>
                                                        <td className="px-4 py-3 small text-muted">
                                                            {formatDate(ticket.createdAt)}
                                                            <div className="smaller mt-1">{new Date(ticket.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                                        </td>
                                                        <td className="px-4 py-3 text-end">
                                                            <div className="d-flex justify-content-end gap-2">
                                                                <Link href={`/account/support/${ticket._id}`} className="btn btn-sm btn-light rounded-pill px-3 fw-bold border">
                                                                    View
                                                                </Link>
                                                                <button 
                                                                    className="btn btn-sm btn-outline-danger rounded-circle p-1 d-flex align-items-center justify-content-center" 
                                                                    style={{ width: "32px", height: "32px" }}
                                                                    onClick={() => handleDelete(ticket._id)}
                                                                >
                                                                    <i className="fa-solid fa-trash-can small"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="pb-4">
                                        <Pagination data={pagination} />
                                    </div>

                                </>
                            ) : (
                                <div className="text-center py-5">
                                    <div className="mb-3 opacity-25">
                                        <i className="fa-solid fa-headset fa-4x text-muted"></i>
                                    </div>
                                    <h5 className="text-dark fw-bold mb-1">No Support Tickets Yet</h5>
                                    <p className="text-muted small">If you have any questions or issues, we're here to help.</p>
                                    <button className="btn btn-primary rounded-pill px-4 mt-2" onClick={() => setActiveTab("new")}>Create Ticket</button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="card-body p-4 p-md-5">
                            <form onSubmit={handleCreateTicket}>
                                <div className="row g-4">
                                    <div className="col-md-8">
                                        <div className="mb-1">
                                            <label className="form-label fw-bold small text-muted text-uppercase">Subject</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3 border-light-subtle"
                                                placeholder="e.g. Issue with my recent order"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-1">
                                            <label className="form-label fw-bold small text-muted text-uppercase">Priority</label>
                                            <select
                                                className="form-select form-select-lg rounded-3 border-light-subtle"
                                                value={formData.priority}
                                                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                            >
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-1">
                                            <label className="form-label fw-bold small text-muted text-uppercase">Your Message</label>
                                            <div className="position-relative">
                                                <textarea
                                                    className="form-control rounded-4 border-light-subtle pr-5"
                                                    rows="5"
                                                    placeholder="Describe your issue in detail..."
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    style={{ paddingBottom: "45px" }}
                                                    required
                                                ></textarea>
                                                
                                                <div className="position-absolute bottom-0 start-0 p-2 d-flex align-items-center gap-2 w-100 bg-white rounded-bottom-4 border-top">
                                                    <input 
                                                        type="file" 
                                                        ref={fileInputRef}
                                                        className="d-none" 
                                                        multiple 
                                                        onChange={handleFileChange}
                                                        accept="image/*"
                                                    />
                                                    <button 
                                                        type="button"
                                                        className="btn btn-sm btn-light rounded-circle d-flex align-items-center justify-content-center shadow-none border hover-primary"
                                                        style={{ width: "32px", height: "32px" }}
                                                        onClick={() => fileInputRef.current.click()}
                                                        title="Add attachment"
                                                    >
                                                        <i className="fa-solid fa-paperclip small"></i>
                                                    </button>
                                                    
                                                    <div className="d-flex gap-2 overflow-auto py-1">
                                                        {filePreviews.map((url, index) => (
                                                            <div key={index} className="position-relative flex-shrink-0" style={{ width: "32px", height: "32px" }}>
                                                                <img 
                                                                    src={url} 
                                                                    alt="preview" 
                                                                    className="w-100 h-100 object-fit-cover rounded border" 
                                                                />
                                                                <button 
                                                                    type="button"
                                                                    className="btn btn-danger btn-sm rounded-circle position-absolute top-0 end-0 p-0 d-flex align-items-center justify-content-center"
                                                                    style={{ width: "14px", height: "14px", marginTop: "-6px", marginRight: "-6px", fontSize: "7px" }}
                                                                    onClick={() => removeFile(index)}
                                                                >
                                                                    <i className="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-end">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg rounded-pill px-5 fw-bold mt-2"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Creating..." : "Submit Ticket"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </section>

            <style jsx>{`
                .smaller { font-size: 0.7rem; }
                :global(.nav-pills .nav-link.active) { background-color: var(--primary) !important; }
                :global(.btn-primary) { background-color: var(--primary) !important; border-color: var(--primary) !important; }
                :global(.text-primary) { color: var(--primary) !important; }
                .table thead th { border-bottom: none; }
                .table tbody tr:last-child td { border-bottom: none; }
                .table-responsive { overflow-x: auto; }
            `}</style>
        </main>
    );
}

export default SupportPage;



