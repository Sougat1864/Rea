// src/components/TicketCard.js
import React from 'react';
import './TicketCard.css';

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <img src={`https://api.randomuser.me/portraits/thumb/men/${ticket.userId}.jpg`} alt="User Avatar" className="user-avatar" />
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      <div className="ticket-footer">
        <span className="ticket-priority">Priority: {ticket.priority}</span>
        <span className="ticket-tag">{ticket.tag[0]}</span>
      </div>
    </div>
  );
}

export default TicketCard;
