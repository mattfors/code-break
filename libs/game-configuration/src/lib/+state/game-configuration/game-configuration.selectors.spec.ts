import { GameConfiguration } from './game-configuration.models';
import { selectGameConfigurationState, selectSecretCode } from './game-configuration.selectors';


describe('GameConfiguration Selectors', () => {

  const state:  GameConfiguration = {
    secretCode: [1,2,3,4],
    columns: 4,
    rows: 10,
    numberOfColors: 6
  };

  it('should return number of configured columns', () => {
    expect(selectSecretCode.projector(state)).toEqual([1,2,3,4])
  });

  it('should return configuration', () => {
    expect(selectGameConfigurationState.projector(state)).toEqual(state)
  });


});
