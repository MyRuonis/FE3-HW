import React from 'react';
import {addGenre, removeGenre} from "../actions";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.title,
      showDescription: true,
    };

  }
  
  render() {
    const { showDescription } = this.state;
    const { title, backgroundImage, date, rating, votes, description, id } = this.props;

    var $hrt = "NotHearted";
    if({id} >= 0){ $hrt = "Hearted";}

    return (
      <div className="card">
          <div
            className="card__image"
            style={{backgroundImage: `url(${backgroundImage})`}}
          />

          <div className="card__title">
              {title}
          </div>

          <div className="card__subtitle">
              <span>{date}</span>
              <span>{rating} ({votes} votes)</span>
          </div>

          <div className="card-info">
            <div className="card-info__header">Summary</div>
            <button onClick={() => { this.setState({ showDescription: !showDescription })}}>Toggle</button>
            <div className="card-info__description">
              {showDescription ? description : null}
            </div>
          </div>

          <button onClick={(dispatch) => {
              if($hrt === "NotHearted") dispatch(addGenre(id));
              else dispatch(removeGenre(id));
          }}>{$hrt}</button>
      </div>
    );
  }
}
