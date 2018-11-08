class Intervals {
  constructor() {
    this.state = [];
  }

  add(inter) {
    let newState = [];
    let merged = inter; // set merge to the interval you want to add
    
    // If nothing is in the state, just push interval in the state
    if(!this.state.length) {
      this.state.push(inter);
      return this.state;
    }


    // iterate through the current state checking to see if any interval interescts with 
    // the interval you want to add.
    for(let i = 0; i < this.state.length; i++) {
      let currentInter = this.state[i];
      if(this.doesIntersect(currentInter, inter)) {
        // merge the two intersecting intervals
        // update "merged" with result
        merged = this.merge(inter, currentInter);
      } else {
        //if current interval doesn't merge, keep it in the state by pushing it newState.
        newState.push(currentInter);
      }
    }
    //at the end of the loop, push in the final merged interval in newState
    // new state becomes the state.
    newState.push(merged);
    this.state = newState;
  }

  // merge intersecting invervals
  merge(inter1, inter2) {
    let max = Math.max(inter1[1], inter2[1]);
    let min = Math.min(inter1[0], inter2[0]);
    return [min, max];
  }

  // Check to see if intervals intersect
  doesIntersect(inter1, inter2) {
    let start1 = inter1[0];
    let start2 = inter2[0];
    let end1 = inter1[1];
    let end2 = inter2[1];
    
    if(end1 < start2 || end2 < start1) {
      return false;
    }
    return true;
  }
}
