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
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

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

    useEffect(() => {
        if (ticket) {
            scrollToBottom();
        }
    }, [ticket]);

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
            open: "bg-success-subtle text-success border-success",
            close: "bg-danger-subtle text-danger border-danger"
        };
        return <span className={`badge rounded-pill border px-3 py-2 fw-medium ${brands[status] || "bg-secondary-subtle text-secondary border-secondary"}`}>{status.toUpperCase()}</span>;
    };

    const getPriorityBadge = (priority) => {
        const brands = {
            high: "bg-danger text-white shadow-sm",
            medium: "bg-warning text-dark shadow-sm",
            low: "bg-info text-white shadow-sm"
        };
        return <span className={`badge rounded-pill px-3 py-2 fw-medium ${brands[priority] || "bg-secondary text-white"}`}>{priority.toUpperCase()}</span>;
    };

    if (loading) {
        return (
            <main className="col-lg-9 ms-auto">
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                    <div className="spinner-grow text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
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
                <header className="d-flex align-items-center mb-4 pb-3 border-bottom">
                    <Link href="/account/support" className="btn btn-icon btn-outline-secondary rounded-circle me-3">
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                    <div>
                        <h1 className="h4 fw-bold m-0 text-dark">Ticket #{ticket.ticket_no}</h1>
                        <p className="text-muted mb-0 small">{ticket.subject}</p>
                    </div>
                </header>

                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="card-header bg-white border-bottom p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex gap-2">
                                {getStatusBadge(ticket.status)}
                                {getPriorityBadge(ticket.priority)}
                            </div>
                            <div className="text-end">
                                <small className="text-muted d-block">Created On</small>
                                <span className="small fw-semibold">{new Date(ticket.createdAt).toLocaleDateString()} {new Date(ticket.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-body p-0">
                        <div className="conversation-box bg-light-subtle" style={{ height: "550px", overflowY: "auto", padding: "24px" }}>
                            {ticket.message.map((msg, index) => (
                                <div key={index} className={`d-flex mb-4 ${msg.from === "customer" ? "justify-content-end" : "justify-content-start"}`}>
                                    <div className={`message-wrapper ${msg.from === "customer" ? "customer-msg" : "support-msg"}`}>
                                        <div className="message-header d-flex justify-content-between align-items-center mb-1">
                                            <span className="small fw-bold">{msg.from === "customer" ? "You" : "Support Agent"}</span>
                                        </div>
                                        <div className="message-bubble p-3 shadow-sm rounded-4">
                                            <p className="mb-0 text-wrap text-break">{msg.message}</p>
                                            
                                            {msg.gallery && msg.gallery.length > 0 && (
                                                <div className="attachment-grid mt-3">
                                                    {msg.gallery.map((file, fIdx) => (
                                                        <div key={fIdx} className="attachment-item">
                                                            <a href={file.url} target="_blank" rel="noreferrer" className="d-block h-100">
                                                                <img src={file.url} alt="attachment" className="rounded border shadow-sm w-100 h-100 object-fit-cover" />
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="message-footer mt-1 px-1">
                                            <small className="text-muted opacity-75">{new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="card-footer bg-white border-top p-4">
                            {ticket.status === "open" ? (
                                <form onSubmit={handleReply}>
                                    <div className="chat-input-wrapper bg-white border rounded-4 p-2 shadow-sm transition-all">
                                        {/* File Previews */}
                                        {filePreviews.length > 0 && (
                                            <div className="d-flex flex-wrap gap-2 mb-2 p-2 bg-light rounded-3 mb-3">
                                                {filePreviews.map((url, index) => (
                                                    <div key={index} className="position-relative" style={{ width: "60px", height: "60px" }}>
                                                        <img 
                                                            src={url} 
                                                            alt="preview" 
                                                            className="w-100 h-100 object-fit-cover rounded-3 border" 
                                                        />
                                                        <button 
                                                            type="button"
                                                            className="btn btn-danger btn-sm rounded-circle position-absolute top-0 end-0 p-0 d-flex align-items-center justify-content-center"
                                                            style={{ width: "20px", height: "20px", marginTop: "-8px", marginRight: "-8px", border: "2px solid white" }}
                                                            onClick={() => removeFile(index)}
                                                        >
                                                            <i className="fa-solid fa-xmark" style={{ fontSize: "10px" }}></i>
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
                                                className="btn btn-icon btn-light rounded-circle hover-primary transition-all"
                                                onClick={() => fileInputRef.current.click()}
                                                title="Attach files"
                                            >
                                                <i className="fa-solid fa-paperclip fs-5"></i>
                                            </button>

                                            <textarea
                                                className="form-control border-0 bg-transparent shadow-none"
                                                rows="1"
                                                placeholder="Type your message here..."
                                                value={replyMessage}
                                                onChange={(e) => {
                                                    setReplyMessage(e.target.value);
                                                    e.target.style.height = 'auto';
                                                    e.target.style.height = e.target.scrollHeight + 'px';
                                                }}
                                                style={{ minHeight: "44px", maxHeight: "150px", resize: "none" }}
                                                required
                                            ></textarea>

                                            <button
                                                type="submit"
                                                className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center mb-1"
                                                disabled={isSubmitting || !replyMessage.trim()}
                                                style={{ width: "42px", height: "42px", flexShrink: 0 }}
                                            >
                                                {isSubmitting ? (
                                                    <span className="spinner-border spinner-border-sm" role="status"></span>
                                                ) : (
                                                    <i className="fa-solid fa-paper-plane"></i>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div className="alert alert-secondary rounded-4 text-center py-4 mb-0 border-dashed">
                                    <i className="fa-solid fa-lock fs-4 mb-2 d-block"></i> 
                                    <span className="fw-medium">This ticket is closed.</span>
                                    <p className="small text-muted mb-0">Please create a new ticket for further assistance.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .conversation-box {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(var(--primary-rgb), 0.2) transparent;
                }
                .conversation-box::-webkit-scrollbar {
                    width: 6px;
                }
                .conversation-box::-webkit-scrollbar-thumb {
                    background-color: rgba(var(--primary-rgb), 0.2);
                    border-radius: 10px;
                }
                
                .message-wrapper {
                    max-width: 75%;
                    display: flex;
                    flex-direction: column;
                }
                
                .customer-msg {
                    align-items: flex-end;
                }
                .customer-msg .message-bubble {
                    background: linear-gradient(135deg, var(--primary), #d62d20);
                    color: white;
                    border-bottom-right-radius: 4px !important;
                }
                .customer-msg .message-header {
                    color: var(--primary);
                }
                
                .support-msg {
                    align-items: flex-start;
                }
                .support-msg .message-bubble {
                    background: white;
                    color: #333;
                    border-bottom-left-radius: 4px !important;
                    border: 1px solid #eee;
                }
                .support-msg .message-header {
                    color: #666;
                }
                
                .attachment-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                    gap: 8px;
                    width: 100%;
                }
                .attachment-item {
                    aspect-ratio: 1/1;
                    overflow: hidden;
                    border-radius: 8px;
                }
                .attachment-item img {
                    transition: transform 0.3s ease;
                }
                .attachment-item:hover img {
                    transform: scale(1.1);
                }
                
                .btn-icon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                }
                
                .chat-input-wrapper:focus-within {
                    border-color: var(--primary) !important;
                    box-shadow: 0 8px 24px rgba(var(--primary-rgb), 0.12) !important;
                }
                
                .hover-primary:hover {
                    background-color: var(--primary-subtle) !important;
                    color: var(--primary) !important;
                }
                
                .transition-all {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .border-dashed {
                    border-style: dashed !important;
                }
                
                :global(.badge) {
                    letter-spacing: 0.5px;
                }
                
                :global(.btn-primary) {
                    background-color: var(--primary) !important;
                    border-color: var(--primary) !important;
                }
            `}</style>
        </main>
    );
}

export default TicketDetailPage;
