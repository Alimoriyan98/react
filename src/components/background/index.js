import { useState } from 'react';
import './style.css';

function BGComponent() {

  const [bg_color, bg_color_set] = useState('#fed7fb');
  var _input_ref;

  return (
    <div className='fluid-container' style={{ background: bg_color }}>
      <div className='d-flex justify-content-center'>
        <div className="card mt-5" style={{ width: 18 + 'rem' }}>
          <div className="card-body">
            <input type="color" id="color" name="color" value={bg_color} ref={(a) => _input_ref = a} onChange={() => bg_color_set(_input_ref.value)} />
            <h5 className="card-title">{bg_color}</h5>
            <p class="card-text">change background color from above colorpicker to change the background and get that color's hex code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BGComponent;