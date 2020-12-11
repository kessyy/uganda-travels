import React, { Component } from "react";
import animal from "../img/animal.jpg";
import accomodation from "../img/accomodation.jpg";
import crestedcrane from "../img/crestedcrane.jpg";
import gorilla from "../img/gorilla.jpg";
import hut from "../img/hut.jpg";
import hotsprint from "../img/hotspring.jpg";
import { Carousel,CarouselItem, CarouselControl, CarouselIndicators,CarouselCaption } from "reactstrap";

const items = [
  {
    src: animal,
    altText: "Animals",
    caption: "Animals"
  },
  {
    src: accomodation,
    altText: "Accomodation",
    caption: "Housing"
  },
  {
    src: crestedcrane,
    altText: "Uganda Enblem",
    caption: "The Crested Crane"
  },
  {
    src: gorilla,
    altText: "Baby gorilla",
    caption: "Gorilla"
  },
  {
    src: hut,
    altText: "Accomodation",
    caption: "Accomodation"
  },
  {
      src: hotsprint,
      altText: "Water",
      caption: "Nature"
  }
];

class MainCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="img-carousel" />
          <CarouselCaption
            captionText={item.altText}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default MainCarousel;
