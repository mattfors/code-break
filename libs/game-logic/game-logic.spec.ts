import { mapAttempt } from './game-logic';

describe('Game Logic', () => {

  it('should prioritize exact match over partial', () => {
    let r = mapAttempt({codes:[1,4,1,1]}, [1,5,4,1]);
    expect(r.results).toEqual(['Exact', 'Exact', 'Partial', 'None'])
  });

  it('should evaluate and sort attempt results', () => {
    let r = mapAttempt({codes:[1,2,4,3]}, [0,2,3,4]);
    expect(r.results).toEqual(['Exact', 'Partial', 'Partial', 'None'])
  });


});
