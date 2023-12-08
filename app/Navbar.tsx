import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="flex bg-green-100 min-w-screen h-16 p-4 justify-between">
        <div className="self-center justify-start text-3xl">VGrid</div>
        <div className="flex gap-10 self-center justify-center">
          <a href="/today">Today</a>
          <a href="/yesterday">Yesterday</a>
          <a href="/archived">Archived</a>
          <a href="/retro">Retro</a>
        </div>
        <div className="flex gap-10 self-center justify-end">
          <a href="/today">Info</a>
          <a href="/yesterday">LinkedIn</a>
        </div>
      </div>
  );
};

export default Navbar;
