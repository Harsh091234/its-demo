import React from 'react'
import NotificationCard from '../components/NotificationCard';

const Notifications = () => {
  return (
    <div className="pt-7 md:max-w-2xl w-full flex flex-col gap-4 px-4">
      <NotificationCard
        avatarSrc="https://randomuser.me/api/portraits/women/45.jpg"
        fullName="Jane Smith"
        username="janesmith"
        postId={123}
      />
      <NotificationCard
        avatarSrc="https://randomuser.me/api/portraits/women/45.jpg"
        fullName="Jane Smith"
        username="janesmith"
        postId={123}
      />
      <NotificationCard
        avatarSrc="https://randomuser.me/api/portraits/women/45.jpg"
        fullName="Jane Smith"
        username="janesmith"
        postId={123}
      />
      <NotificationCard
        avatarSrc="https://randomuser.me/api/portraits/women/45.jpg"
        fullName="Jane Smith"
        username="janesmith"
        postId={123}
      />
    </div>
  );
}

export default Notifications