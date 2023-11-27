import React, { useState } from 'react';
import Modal from 'react-modal';

const AdminDashboard = () => {
  // State variables
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Handle card click
  const handleCardClick = (user) => {
    setSelectedUser(user);
    setIsDetailsModalOpen(true);
  };

  // Handle details modal close
  const closeDetailsModal = () => {
    setSelectedUser(null);
    setIsDetailsModalOpen(false);
  };

  // Handle "Rechazar" button click
  const handleRejectClick = () => {
    setIsDetailsModalOpen(false);
    setIsFeedbackModalOpen(true);
  };

  // Handle feedback modal close
  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
    setFeedback('');
  };

  // Handle feedback submit
  const handleFeedbackSubmit = () => {
    // Handle feedback submission (you can add your logic here)
    closeFeedbackModal();
  };

  // Expanded dummy data with additional details
  const dummyData = [
    {
      profilePicture: 'https://source.unsplash.com/100x100/?person',
      fullName: 'John Doe',
      signUpDate: '2022-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      idCardImage: 'https://source.unsplash.com/300x200/?id-card',
    },
    {
      profilePicture: 'https://source.unsplash.com/100x100/?person',
      fullName: 'Jane Doe',
      signUpDate: '2022-02-15',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      idCardImage: 'https://source.unsplash.com/300x200/?id-card',
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-pink-600 p-4 text-white">
        <h2 className="text-xl font-bold">Bienvenido Administrador</h2>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Solicitudes Entrantes de Nutricionistas</h2>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Foto de perfil</th>
                <th className="border p-2">Nombre completo</th>
                <th className="border p-2">Miembro desde</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {dummyData.map((user) => (
                <tr key={user.profilePicture} onClick={() => handleCardClick(user)} style={{ cursor: 'pointer' }}>
                  <td className="border p-2">
                    <img src={user.profilePicture} alt="Profile" className="w-8 h-8 rounded-full mx-auto" />
                  </td>
                  <td className="border p-2">{user.fullName}</td>
                  <td className="border p-2">{user.signUpDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Details Modal */}
        <Modal
          isOpen={isDetailsModalOpen}
          onRequestClose={closeDetailsModal}
          contentLabel="User Details"
          className="modal max-w-md mx-auto mt-16 p-8 bg-white rounded-lg shadow-md"
          overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50"
        >
          <div className="text-center">
            {selectedUser && (
              <div>
                <img src={selectedUser.profilePicture} alt="Profile" className="w-16 h-16 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-bold">{selectedUser.fullName}</h2>
                <p>Miembro desde:</p>
                <p>{selectedUser.signUpDate}</p>
                <p>Detalle de solicitud:</p>
                <p>{selectedUser.description}</p>
                <img
                  src={selectedUser.idCardImage}
                  alt="ID Card"
                  className="mx-auto my-4"
                  style={{ maxWidth: '100%' }}
                />
                <div className="flex justify-center space-x-4">
                  <button className="bg-green-500 text-white p-2" onClick={closeDetailsModal}>
                    Aceptar
                  </button>
                  <button className="bg-red-500 text-white p-2" onClick={handleRejectClick}>
                    Rechazar
                  </button>
                </div>
              </div>
            )}
          </div>
        </Modal>

        {/* Feedback Modal */}
        <Modal
          isOpen={isFeedbackModalOpen}
          onRequestClose={closeFeedbackModal}
          contentLabel="Feedback"
          className="modal max-w-md mx-auto mt-16 p-8 bg-white rounded-lg shadow-md"
          overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50"
        >
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Retroalimentar Nutricionista</h2>
            <textarea
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Escribe tu feedback aquí..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="flex justify-center space-x-4">
              <button className="bg-green-500 text-white p-2" onClick={handleFeedbackSubmit}>
                Enviar
              </button>
              <button className="bg-gray-500 text-white p-2" onClick={closeFeedbackModal}>
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

// Export the component
export default AdminDashboard;
