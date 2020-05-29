// React, shallow, mount y render estan definidas como globals via jest-environment-enzyme

import GrillaArticuloPreview from './GrillaArticuloPreview';

describe('Tests de componente GrillaArticuloPreview', () => {
  test('Basic text match', () => {
    const component = shallow(<GrillaArticuloPreview />);
    
    expect(component).toHaveText('Preview de Articulo X');
  });

});
