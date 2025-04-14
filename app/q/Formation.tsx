import React from 'react';

const players = [
  { name: "GK", top: "50%", left: "10%" },
  { name: "LB", top: "20%", left: "20%" },
  { name: "LCB", top: "35%", left: "16%" },
  { name: "RCB", top: "65%", left: "16%" },
  { name: "RB", top: "80%", left: "20%" },
  { name: "LM", top: "30%", left: "30%" },
  { name: "CM", top: "50%", left: "30%" },
  { name: "RM", top: "70%", left: "30%" },
  { name: "LW", top: "20%", left: "40%" },
  { name: "ST", top: "50%", left: "40%" },
  { name: "RW", top: "80%", left: "40%" },

  { name: "GK", top: "50%", left: "90%" },
  { name: "LB", top: "20%", left: "80%" },
  { name: "LCB", top: "35%", left: "84%" },
  { name: "RCB", top: "65%", left: "84%" },
  { name: "RB", top: "80%", left: "80%" },
  { name: "LM", top: "30%", left: "70%" },
  { name: "CM", top: "50%", left: "70%" },
  { name: "RM", top: "70%", left: "70%" },
  { name: "LW", top: "20%", left: "60%" },
  { name: "ST", top: "50%", left: "60%" },
  { name: "RW", top: "80%", left: "60%" },
];

const Formation = () => {
  return (
    <div className="w-full">
      <div className="relative w-full aspect-[2/1] bg-[url('/assets/pitch.svg')] bg-cover">
        {players.map((player, index) => (
          <div
            key={index}
            className={`absolute w-6 h-6 ${index >= 11 ? 'bg-yellow-500' : 'bg-red-500'}  text-white text-[10px] flex items-center justify-center rounded-full`}
            style={{
              top: player.top,
              left: player.left,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {player.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formation;
