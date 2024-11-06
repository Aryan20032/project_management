import Image from "next/image";
import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex items-center rounded border p-4 shadow dark:text-white">
      {user.profilePictureUrl && (
        <Image
          src={`https://pm-s3-images-aryan.s3.us-east-1.amazonaws.com/p1.jpeg`}
          alt="profile-picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div>
        <h3> {user.username} </h3>
        <p> {user.email} </p>
      </div>
    </div>
  );
};

export default UserCard;
