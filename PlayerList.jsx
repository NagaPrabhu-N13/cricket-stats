import React from 'react';

const playersData = [
  { "id": 1, "name": "Virat Kohli", "runs": 1289, "balls": 1102 },
  { "id": 2, "name": "Rohit Sharma", "runs": 978, "balls": 750 },
  { "id": 3, "name": "KL Rahul", "runs": 756, "balls": 680 },
  { "id": 4, "name": "Jasprit Bumrah", "runs": 45, "balls": 90 },
  { "id": 5, "name": "Rishabh Pant", "runs": 620, "balls": 450 }
];

const PlayerList = () => {

  const calculateStrikeRate = (runs, balls) => {
    if (balls === 0) {
      return 0; // Avoid division by zero
    }
    return ((runs / balls) * 100).toFixed(2); // Rounded to 2 decimal places
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Cricket Players Stats</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#706d6dff' }}>
            <th style={{ padding: '12px', border: '1px solid #000000ff', textAlign: 'left' }}>Player Name</th>
            <th style={{ padding: '12px', border: '1px solid #000000ff', textAlign: 'left' }}>Runs Scored</th>
            <th style={{ padding: '12px', border: '1px solid #000000ff', textAlign: 'left' }}>Balls Faced</th>
            <th style={{ padding: '12px', border: '1px solid #000000ff', textAlign: 'left' }}>Strike Rate</th>
          </tr>
        </thead>
        <tbody>
          {playersData.map(player => (
            <tr key={player.id}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{player.name}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{player.runs}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{player.balls}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                {calculateStrikeRate(player.runs, player.balls)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;

