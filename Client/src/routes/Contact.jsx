import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { getContact, deleteContact } from "../Contact";

var contact;

export async function contactLoader({ params }) {
  try {
    const response = await fetch("/findContact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Extract JSON from the response

    // Assuming 'contact' is extracted from the response data
    const contact = data[0]; // Adjust based on your response structure
    return contact; // Return the contact or other processed data
  } catch (error) {
    console.error("Error:", error);
    // Handle error state or show error message
  }
}

export async function deleteContactAction(e, params) {
  try {
    console.log(params.id);
    const response = await fetch("/deleteContact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error("Nework response was not ok");
    }

    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  return redirect(`/`);
}

export function Contact(props) {
  contact = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.firstName || contact.lastName ? (
            <>
              {contact.firstName} {contact.lastName}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form onSubmit={(e)=>deleteContactAction(e, contact)}
            method="post"
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
