import {screen, render} from '@testing-library/react';

import Web from '../pages/index';

describe('Web', () => {
    it('renders correctly', () => {
        render(<Web />);
    
        screen.getByText(/web/i);
    });
})

