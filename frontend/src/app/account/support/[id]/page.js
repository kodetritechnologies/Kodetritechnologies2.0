"use client";
import BasicProvider from "@/utils/BasicProvider";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import { toast } from "react-hot-toast";
import Link from "next/link";

function TicketDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const basicProvider = BasicProvider();
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [replyMessage, setReplyMessage] = useState("");
    const [replyFiles, setReplyFiles] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);
    const [filePreviews, setFilePreviews] = useState([]);

    const fetchTicket = async () => {
        setLoading(true);
        try {
            const res = await basicProvider.getMethod(`public/support/${id}`);
            if (res.status === "success") {
                setTicket(res.data);
            } else {
                toast.error(res.message || "Ticket not found");
                router.push("/account/support");
            }
        } catch (error) {
            console.error("Error fetching ticket:", error);
            toast.error("An error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchTicket();
        }
    }, [id]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setReplyFiles(files);
        
        // Generate previews
        const previews = files.map(file => URL.createObjectURL(file));
        setFilePreviews(previews);
    };

    const removeFile = (index) => {
        const newFiles = replyFiles.filter((_, i) => i !== index);
        const newPreviews = filePreviews.filter((_, i) => i !== index);
        setReplyFiles(newFiles);
        setFilePreviews(newPreviews);
    };

    const handleReply = async (e) => {
        e.preventDefault();
        if (!replyMessage.trim()) return;

        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("message", replyMessage);
            formData.append("status", ticket.status);
            replyFiles.forEach((file) => {
                formData.append("gallery", file);
            });

            const res = await basicProvider.patchMethod(`public/support/reply/${id}`, formData);
            if (res.status === "success") {
                toast.success("Reply sent!");
                setReplyMessage("");
                setReplyFiles([]);
                setFilePreviews([]);
                fetchTicket();
            } else {
                toast.error(res.message || "Failed to send reply");
            }
        } catch (error) {
            console.error("Error replying to ticket:", error);
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
        return <span className={`badge rounded-pill border px-3 py-1 ${brands[status] || "bg-secondary-subtle text-secondary"}`}>{status.toUpperCase()}</span>;
    };

    const getPriorityBadge = (priority) => {
        const brands = {
            high: "bg-danger text-white",
            medium: "bg-warning text-dark",
            low: "bg-info text-white"
        };
        return <span className={`badge ${brands[priority] || "bg-secondary text-white"}`}>{priority.toUpperCase()}</span>;
    };

    if (loading) {
        return (
            <main className="col-lg-9 ms-auto">
                <div className="d-flex justify-content-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </main>
        );
    }

    if (!ticket) return null;

    return (
        <main className="col-lg-9 ms-auto">
            <section className="my-account-content">
                <header className="d-flex align-items-center mb-4 pb-2 border-bottom">
                    <Link href="/account/support" className="btn btn-sm btn-outline-secondary me-3">
                        <i className="fa-solid fa-arrow-left me-1"></i> Back
                    </Link>
                    <div>
                        <h1 className="h4 fw-bold m-0 text-dark">Ticket #{ticket.ticket_no}</h1>
                        <p className="text-muted mb-0 small">{ticket.subject}</p>
                    </div>
                </header>

                <div className="card border-0 shadow-sm rounded-4 mb-4">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                {getStatusBadge(ticket.status)}
                                <span className="ms-2">{getPriorityBadge(ticket.priority)}</span>
                            </div>
                            <small className="text-muted">Created: {new Date(ticket.createdAt).toLocaleString()}</small>
                        </div>

                        <div className="conversation-box mb-4" style={{ maxHeight: "600px", overflowY: "auto", padding: "10px" }}>
                            {ticket.message.map((msg, index) => (
                                <div key={index} className={`d-flex mb-4 ${msg.from === "customer" ? "justify-content-end" : "justify-content-start"}`}>
                                    <div className={`p-3 rounded-4 shadow-sm ${msg.from === "customer" ? "bg-primary text-white" : "bg-light text-dark"}`} style={{ maxWidth: "80%" }}>
                                        <div className="small fw-bold mb-1">{msg.from === "customer" ? "You" : "Support Agent"}</div>
                                        <p className="mb-2">{msg.message}</p>

                                        {msg.gallery && msg.gallery.length > 0 && (
                                            <div className="row g-2 mb-2 mt-1">
                                                {msg.gallery.map((file, fIdx) => (
                                                    <div key={fIdx} className="col-4">
                                                        <a href={file.url} target="_blank" rel="noreferrer">
                                                            <img src={file.url} alt="attachment" className="img-fluid rounded border shadow-sm" style={{ height: "80px", width: "100%", objectFit: "cover" }} />
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="text-end smaller opacity-75">{new Date(msg.createdAt).toLocaleTimeString()}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {ticket.status === "open" ? (
                            <form onSubmit={handleReply} className="mt-4 pt-4 border-top">
                                <div className="chat-input-container bg-white border rounded-4 p-2 shadow-sm">
                                    {/* File Previews inside the input container */}
                                    {filePreviews.length > 0 && (
                                        <div className="d-flex flex-wrap gap-2 mb-2 p-2 border-bottom border-light">
                                            {filePreviews.map((url, index) => (
                                                <div key={index} className="position-relative" style={{ width: "45px", height: "45px" }}>
                                                    <img 
                                                        src={url} 
                                                        alt="preview" 
                                                        className="w-100 h-100 object-fit-cover rounded border" 
                                                    />
                                                    <button 
                                                        type="button"
                                                        className="btn btn-danger btn-sm rounded-circle position-absolute top-0 end-0 p-0 d-flex align-items-center justify-content-center"
                                                        style={{ width: "16px", height: "16px", marginTop: "-6px", marginRight: "-6px", fontSize: "8px" }}
                                                        onClick={() => removeFile(index)}
                                                    >
                                                        <i className="fa-solid fa-xmark"></i>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="d-flex align-items-end gap-2 px-1">
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
                                            className="btn btn-link text-muted p-2 shadow-none hover-primary"
                                            onClick={() => fileInputRef.current.click()}
                                        >
                                            <i className="fa-solid fa-paperclip fs-5 transition-all"></i>
                                        </button>

                                        <textarea
                                            className="form-control border-0 bg-transparent shadow-none"
                                            rows="1"
                                            placeholder="Type your message here..."
                                            value={replyMessage}
                                            onChange={(e) => setReplyMessage(e.target.value)}
                                            style={{ minHeight: "44px", maxHeight: "150px" }}
                                            required
                                        ></textarea>

                                        <button
                                            type="submit"
                                            className="btn btn-primary rounded-circle p-0 d-flex align-items-center justify-content-center mb-1"
                                            disabled={isSubmitting || !replyMessage.trim()}
                                            style={{ width: "38px", height: "38px" }}
                                        >
                                            {isSubmitting ? (
                                                <span className="spinner-border spinner-border-sm" role="status"></span>
                                            ) : (
                                                <i className="fa-solid fa-paper-plane small"></i>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div className="alert alert-secondary rounded-4 text-center py-4">
                                <i className="fa-solid fa-lock me-2"></i> This ticket is closed. Please create a new ticket for further assistance.
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <style jsx>{`
                .smaller { font-size: 0.75rem; }
                :global(.btn-primary) { background-color: var(--primary) !important; border-color: var(--primary) !important; }
                :global(.text-primary) { color: var(--primary) !important; }
                :global(.bg-primary) { background-color: var(--primary) !important; }
                .chat-input-container { transition: all 0.2s ease; border: 1px solid #dee2e6; }
                .chat-input-container:focus-within { border-color: var(--primary); box-shadow: 0 0 0 0.25rem rgba(var(--primary-rgb), 0.1); }
                .hover-primary:hover i { color: var(--primary); transform: rotate(15deg); }
                .transition-all { transition: all 0.2s ease; }
            `}</style>
        </main>
    );
}

export default TicketDetailPage;
