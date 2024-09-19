// src/components/KanbanBoard.js
import React, { useState, useEffect } from 'react';
import './KanbanBoard.css';
import TicketCard from './TicketCard';
import { fetchData } from '../api';

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');

  useEffect(() => {
    fetchData().then((data) => setTickets(data.tickets));
  }, []);

  // Function to group tickets by the selected grouping method
  const groupTickets = () => {
    const grouped = {};
    tickets.forEach((ticket) => {
      let key;
      switch (grouping) {
        case 'status':
          key = ticket.status;
          break;
        case 'user':
          key = ticket.userId;
          break;
        case 'priority':
          key = ticket.priority;
          break;
        default:
          key = 'status';
      }

      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(ticket);
    });
    return grouped;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {groupedTickets[group].map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;

