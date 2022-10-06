import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarField() {
  return (
<div>
<p>Strength</p>
<div className="state-box">
  <div className="stregth state">
  <ProgressBar variant="stregth" now={80} />
  </div>
</div>

<p>Vitality</p>
<div className="state-box">
  <div className="vitality state">
  <ProgressBar variant="vitality" now={80} />
  </div>
</div>

<p>Intelligence</p>
<div className="state-box">
  <div className="intelligence state">
  <ProgressBar variant="intelligence" now={80} />
  </div>
</div>

<p>Spiritual power</p>
<div className="state-box">
<div className="spiritual-power state">
<ProgressBar variant="spiritual_power" now={80} />
</div>
</div>
</div>

    
  );
}

{/* <p>Strength</p>
<div className="state-box">
  <div className="stregth state">
  <ProgressBar variant="stregth" now={80} />
  </div>
</div>

<p>Vitality</p>
<div className="state-box">
  <div className="vitality state">
  <ProgressBar variant="vitality" now={80} />
  </div>
</div>

<p>Intelligence</p>
<div className="state-box">
  <div className="intelligence state">
  <ProgressBar variant="intelligence" now={80} />
  </div>
</div>

<p>Spiritual power</p>
<div className="state-box">
<div className="spiritual-power state">
<ProgressBar variant="spiritual_power" now={80} />
</div>
</div> */}

export default ProgressBarField;