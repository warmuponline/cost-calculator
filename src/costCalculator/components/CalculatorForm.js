import React, { useEffect } from 'react';
import CostCalculator from '../CostCalculator';

function CalculatorForm({ selectedRoomType, setSelectedRoomType, selectedProjectSize, setSelectedProjectSize, email, setEmail, handleSubmit,setRoomTypeChanged,
    setProjectSizeChanged }) {


      // useEffect(() => {
      //   if (selectedRoomType && selectedProjectSize) {
      //     CostCalculator.updateHeadings();
      //   }
      // }, [selectedRoomType, selectedProjectSize]);

  return (
    <form id="calculator-form" onSubmit={handleSubmit}>
         <div className="pull-left text-large col-md-6 padding-left-0">
                <div className="row">
                  <div className="column question">
                    <h3> Room Type:</h3>
                    <div className="button dropdown">
                      <select
                        id="room-type"
                        value={selectedRoomType}
                        onChange={(e) => {setSelectedRoomType(e.target.value);
                          setRoomTypeChanged(true);
                        }}
                      >
                        <option value="bathroom">Bathroom / WC</option>
                        <option value="kitchen">Kitchen / Utility</option>
                        <option value="bedroom">Bedroom</option>
                        <option value="livingroom">Living Room / Dining Room</option>
                        <option value="conservatory">Conservatory / Porch</option>
                        <option value="hallway">Hallway / Landing</option>
                      </select>
                    </div>
                  </div>
                  <div className="column question">
                    <h3> Project Size:</h3>
                    <div className="button dropdown">
                      <select
                        id="project-size"
                        value={selectedProjectSize}
                        onChange={(e) => {setSelectedProjectSize(e.target.value);
                        setProjectSizeChanged(true);
                        }}
                      >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="column question">
                    <h3> Email Address:</h3>
                    <div className="button emailfield">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email..."
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="column question">
                    <input
                      type="submit"
                      value="Calculate Costs"
                      id="calculate-button-submit"
                      className="calculate-button"
                    />
                  </div>
                </div>
              </div>
    </form>
  );
}

export default CalculatorForm;
