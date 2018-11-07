class Intervals {
  constructor() {
    this.state = [];
  }

  add(inter) {
    let newState = [];
    let merged;
    

    if(!this.state.length) {
      this.state.push(inter);
      return this.state;
    }

    for(let i = 0; i < this.state.length; i++) {
      let currentInter = this.state[i];
      if(this.doesIntersect(currentInter, inter)) {
        merged = this.merge(inter, currentInter);
      } else {
        newState.push(currentInter);
      }
    }
    newState.push(merged);
    this.state = newState;
  }

  merge(inter1, inter2) {
    let max = Math.max(inter1[1], inter2[1]);
    let min = Math.min(inter1[0], inter2[0]);
    return [min, max];
  }

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
