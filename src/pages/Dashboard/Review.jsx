import React from "react";

const Review = ({ i, review: { name, ratting, feedback } }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{name}</td>
      <td>{feedback.slice(0, 60)}...</td>
      <td>{ratting}</td>
    </tr>
  );
};

export default Review;
