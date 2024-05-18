import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetEditSocialLinks, UpdateProfile } from "../redux/userSlice"; // Import actions

const EditSocialPage = () => {
  const dispatch = useDispatch();
  const { user, editSocialLinks } = useSelector((state) => state.user);

  const [socialLinks, setSocialLinks] = useState(user.socialLinks || {}); // Initialize with existing or empty object

  const handleChange = (event) => {
    setSocialLinks({ ...socialLinks, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      UpdateProfile({
        userData: { ...user, socialLinks },
        editSocialLinks: false,
      })
    ); // Update profile and close modal
  };

  const handleClose = () => {
    dispatch(SetEditSocialLinks(false)); // Close modal
  };

  return (
    <div className="edit-social-modal">
      <h2>Edit Social Links</h2>
      <form onSubmit={handleSubmit}>
        <div className="social-link-field">
          <label htmlFor="facebook">Facebook:</label>
          <input
            type="text"
            name="facebook"
            id="facebook"
            value={socialLinks.facebook || ""}
            onChange={handleChange}
          />
        </div>
        <div className="social-link-field">
          {/* Add additional social link fields as needed */}
          <label htmlFor="instagram">Instagram:</label>
          <input
            type="text"
            name="instagram"
            id="instagram"
            value={socialLinks.instagram || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default EditSocialPage;
