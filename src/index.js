import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.phoneNumber}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phoneNumber="(212) 555-1234"
      email="b@beyonce.com"
    />

    <Card name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phoneNumber="(212) 555-1234"
      email="b@beyonce.com"
    />

    <Card name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phoneNumber="(212) 555-1234"
      email="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);
