import { useState } from "react";
import { getContact, updateContact } from "../Contact";
import { useLoaderData, Form, redirect, useNavigate } from "react-router-dom";

export async function contactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return contact;
}

export async function updateContactAction({ request }) {
  const url = request.url;
  var id;
  const match = url.match(/\/contacts\/([^/]+)/); // Match '/contacts/' followed by any characters except '/'
  if (match && match[1]) {
    id = match[1];
  }


    // Creating User Data Object
    const formData = {
      id: id,
      first: document.getElementById('first').value,
      last: document.getElementById('last').value,
      twitter: document.getElementById('twitter').value,
      avatar: document.getElementById('avatar').value,
      notes: document.getElementById('notes').value
    }

  try {
    const response = await fetch("/updateAddress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  
    console.log(await response.json());
  
  }
  catch (err) {
    console.log(err);
  }
  return redirect("/");
}

export function Edit(props) {

  const contact = useLoaderData();
  const navigate = useNavigate();


  return (
    <>
      <Form
        method="post"
        id="contact-form"
        action="update"
      >
        <p>
          <span>Name</span>
          <input
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
            id="first"
            defaultValue={contact.firstName}
          />
          <input
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
            id="last"
            defaultValue={contact.lastName}
          />
        </p>
        <label>
          <span>Twitter</span>
          <input
            type="text"
            name="twitter"
            placeholder="@jack"
            id="twitter"
            defaultValue={contact.twitter}
          />
        </label>
        <label>
          <span>Avatar URL</span>
          <input
            placeholder="https://example.com/avatar.jpg"
            aria-label="Avatar URL"
            type="text"
            name="avatar"
            id="avatar"
            defaultValue={contact.avatar}
          />
        </label>
        <label>
          <span>Notes</span>
          <textarea
            name="notes"
            defaultValue={contact.notes}
            id="notes"
            rows={6}
          />
        </label>
        <p>
          <button type="submit">Save</button>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
        </p>
      </Form>
    </>
  );
}
