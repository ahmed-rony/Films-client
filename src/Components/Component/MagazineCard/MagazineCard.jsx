import React from 'react';
import './MagazineCard.scss';

const MagazineCard = ({mag}) => {
    return (
        <div>
            {mag.map((g) => (
                <div className="magazine-item" key={g.id}>
                  <img src={g.imgUrl} alt="" />
                  <div className="info">
                    <span>{g.username}</span>
                    <h4>{g.title.substring(0, 70)}..</h4>
                  </div>
                </div>
              ))}
        </div>
    );
};

export default MagazineCard;