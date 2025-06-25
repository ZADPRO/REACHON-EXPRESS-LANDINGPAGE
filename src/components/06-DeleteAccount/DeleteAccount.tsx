import React, { useState } from "react";

const DeleteAccount: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirmed) {
      alert("Please confirm to delete your account.");
      return;
    }

    if (!username || !password) {
      alert("Username and password are required.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/deleteAccount`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Your account has been deleted.");
        // Clear form
        setUsername("");
        setPassword("");
        setConfirmed(false);
      } else {
        alert(data.message || "Failed to delete account.");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 mb-10 px-6 py-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-center text-red-600 mb-4">
        Delete Account
      </h2>

      <p className="text-gray-600 text-sm mb-6 text-center">
        Enter your username and password to confirm account deletion.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={() => setConfirmed(!confirmed)}
            className="w-4 h-4 text-red-600"
          />
          <label className="text-sm text-gray-700">
            I confirm I want to delete my account permanently
          </label>
        </div>

        <button
          onClick={handleDelete}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
        >
          {loading ? "Deleting..." : "Delete Account"}
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
