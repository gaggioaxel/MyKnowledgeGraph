import { h, Component } from 'preact';
import script from "./scripts/graph.inline"
import style from "./styles/graph.scss"

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

interface SliderState {
  dragging: boolean;
}



const Slider = ({ min, max, value, onChange }: SliderProps) => {
  const handleSliderChange = (event: Event) => {
    // Logic to handle slider change
    onChange(parseFloat((event.target as HTMLInputElement).value));
  };

  return (
    <input type="range" min={min} max={max} value={value} onInput={handleSliderChange} />
  );
};

// Define properties to make Slider compatible with QuartzComponent
Slider.css = style // Add any required CSS for the component
Slider.afterDOMLoaded = script // Add any required script to run after DOM is loaded

export default Slider;
