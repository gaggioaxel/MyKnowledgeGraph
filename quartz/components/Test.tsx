import { QuartzComponentConstructor, QuartzComponentProps, QuartzComponent } from "./types"
// @ts-ignore
import {playground} from "./scripts/neural_network/playground"
 
const YourComponent: QuartzComponent = ({ fileData, displayClass, cfg, ctx }: QuartzComponentProps) => {
  //if (fileData.slug == "index"){  console.log(fileData.htmlAst?.children);}
  return (
<html>

<body>

  <div id="top-controls">
    <div class="container l--page">
      <div class="timeline-controls">
        <button class="mdl-button mdl-js-button mdl-button--icon ui-resetButton" id="reset-button" title="Reset the network">
          <i class="material-icons">replay</i>
        </button>
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored ui-playButton" id="play-pause-button" title="Run/Pause">
          <i class="material-icons">play_arrow</i>
          <i class="material-icons">pause</i>
        </button>
        <button class="mdl-button mdl-js-button mdl-button--icon ui-stepButton" id="next-step-button" title="Step">
          <i class="material-icons">skip_next</i>
        </button>
      </div>
      <div class="control">
        <span class="label">Epoch</span>
        <span class="value" id="iter-number"></span>
      </div>
      <div class="control ui-learningRate">
        <label for="learningRate">Learning rate</label>
        <div class="select">
          <select id="learningRate">
            <option value="0.00001">0.00001</option>
            <option value="0.0001">0.0001</option>
            <option value="0.001">0.001</option>
            <option value="0.003">0.003</option>
            <option value="0.01">0.01</option>
            <option value="0.03">0.03</option>
            <option value="0.1">0.1</option>
            <option value="0.3">0.3</option>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div class="control ui-activation">
        <label for="activations">Activation</label>
        <div class="select">
          <select id="activations">
            <option value="relu">ReLU</option>
            <option value="tanh">Tanh</option>
            <option value="sigmoid">Sigmoid</option>
            <option value="linear">Linear</option>
          </select>
        </div>
      </div>
      <div class="control ui-regularization">
        <label for="regularizations">Regularization</label>
        <div class="select">
          <select id="regularizations">
            <option value="none">None</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
          </select>
        </div>
      </div>
      <div class="control ui-regularizationRate">
        <label for="regularRate">Regularization rate</label>
        <div class="select">
          <select id="regularRate">
            <option value="0">0</option>
            <option value="0.001">0.001</option>
            <option value="0.003">0.003</option>
            <option value="0.01">0.01</option>
            <option value="0.03">0.03</option>
            <option value="0.1">0.1</option>
            <option value="0.3">0.3</option>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div class="control ui-problem">
        <label for="problem">Problem type</label>
        <div class="select">
          <select id="problem">
            <option value="classification">Classification</option>
            <option value="regression">Regression</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <div id="main-part" class="l--page">

    <div class="column data">
      <h4>
        <span>Data</span>
      </h4>
      <div class="ui-dataset">
        <p>Which dataset do you want to use?</p>
        <div class="dataset-list">
          <div class="dataset" title="Circle">
            <canvas class="data-thumbnail" data-dataset="circle"></canvas>
          </div>
          <div class="dataset" title="Exclusive or">
            <canvas class="data-thumbnail" data-dataset="xor"></canvas>
          </div>
          <div class="dataset" title="Gaussian">
            <canvas class="data-thumbnail" data-dataset="gauss"></canvas>
          </div>
          <div class="dataset" title="Spiral">
            <canvas class="data-thumbnail" data-dataset="spiral"></canvas>
          </div>
          <div class="dataset" title="Plane">
            <canvas class="data-thumbnail" data-regDataset="reg-plane"></canvas>
          </div>
          <div class="dataset" title="Multi gaussian">
            <canvas class="data-thumbnail" data-regDataset="reg-gauss"></canvas>
          </div>
        </div>
      </div>
      <div>
        <div class="ui-percTrainData">
          <label for="percTrainData">Ratio of training to test data:&nbsp;&nbsp;<span class="value">XX</span>%</label>
          <p class="slider">
            <input class="mdl-slider mdl-js-slider" type="range" id="percTrainData" min="10" max="90" step="10"></input>
          </p>
        </div>
        <div class="ui-noise">
          <label for="noise">Noise:&nbsp;&nbsp;<span class="value">XX</span></label>
          <p class="slider">
            <input class="mdl-slider mdl-js-slider" type="range" id="noise" min="0" max="50" step="5"></input>
          </p>
        </div>
        <div class="ui-batchSize">
          <label for="batchSize">Batch size:&nbsp;&nbsp;<span class="value">XX</span></label>
          <p class="slider">
            <input class="mdl-slider mdl-js-slider" type="range" id="batchSize" min="1" max="30" step="1"></input>
          </p>
        </div>
          <button class="basic-button" id="data-regen-button" title="Regenerate data">
            Regenerate
          </button>
      </div>
    </div>

    <div class="column features">
      <h4>Features</h4>
      <p>Which properties do you want to feed in?</p>
      <div id="network">
        <svg id="svg" width="510" height="450">
          <defs>
            <marker id="markerArrow" markerWidth="7" markerHeight="13" refX="1" refY="6" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M2,11 L7,6 L2,2" />
            </marker>
          </defs>
        </svg>
        <div id="hovercard">
          <div style="font-size:10px">Click anywhere to edit.</div>
          <div><span class="type">Weight/Bias</span> is <span class="value">0.2</span><span><input type="number"/></span>.</div>
        </div>
        <div class="callout thumbnail">
          <svg viewBox="0 0 30 30">
            <defs>
              <marker id="arrow" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M0,0 L5,2.5 L0,5 z"/>
              </marker>
            </defs>
            <path d="M12,30C5,20 2,15 12,0" marker-end="url(#arrow)"></path>
          </svg>
          <div class="label">
            This is the output from one <b>neuron</b>. Hover to see it larger.
          </div>
        </div>
        <div class="callout weights">
          <svg viewBox="0 0 30 30">
            <defs>
              <marker id="arrow" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M0,0 L5,2.5 L0,5 z"/>
              </marker>
            </defs>
            <path d="M12,30C5,20 2,15 12,0" marker-end="url(#arrow)"></path>
          </svg>
          <div class="label">
            The outputs are mixed with varying <b>weights</b>, shown by the thickness of the lines.
          </div>
        </div>
      </div>
    </div>

    <div class="column hidden-layers">
      <h4>
        <div class="ui-numHiddenLayers">
          <button id="add-layers" class="mdl-button mdl-js-button mdl-button--icon">
            <i class="material-icons">add</i>
          </button>
          <button id="remove-layers" class="mdl-button mdl-js-button mdl-button--icon">
            <i class="material-icons">remove</i>
          </button>
        </div>
        <span id="num-layers"></span>
        <span id="layers-label"></span>
      </h4>
      <div class="bracket"></div>
    </div>

    <div class="column output">
      <h4>Output</h4>
      <div class="metrics">
        <div class="output-stats ui-percTrainData">
          <span>Test loss</span>
          <div class="value" id="loss-test"></div>
        </div>
        <div class="output-stats train">
          <span>Training loss</span>
          <div class="value" id="loss-train"></div>
        </div>
        <div id="linechart"></div>
      </div>
      <div id="heatmap"></div>
      <div style="float:left;margin-top:20px">
        <div style="display:flex; align-items:center;">

          <div class="label" style="width:105px; margin-right: 10px">
            Colors shows data, neuron and weight values.
          </div>
          <svg width="150" height="30" id="colormap">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f59322" stop-opacity="1"></stop>
                <stop offset="50%" stop-color="#e8eaeb" stop-opacity="1"></stop>
                <stop offset="100%" stop-color="#0877bd" stop-opacity="1"></stop>
              </linearGradient>
            </defs>
            <g class="core" transform="translate(3, 0)">
              <rect width="144" height="10" style="fill: url('#gradient');"></rect>
            </g>
          </svg>
        </div>
        <br/>
        <div style="display:flex;">
          <label class="ui-showTestData mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="show-test-data">
            <input type="checkbox" id="show-test-data" class="mdl-checkbox__input" checked></input>
            <span class="mdl-checkbox__label label">Show test data</span>
          </label>
          <label class="ui-discretize mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="discretize">
            <input type="checkbox" id="discretize" class="mdl-checkbox__input" checked></input>
            <span class="mdl-checkbox__label label">Discretize output</span>
          </label>
        </div>
      </div>
    </div>

  </div>
</body>
</html>
)

  //return (
  //  <p> 
  //    <button id="btn">{fileData.slug}</button>
  //    {fileData.text} 
  //  </p>
  //)
}
 
YourComponent.afterDOMLoaded = null//playground()

export default (() => YourComponent) satisfies QuartzComponentConstructor