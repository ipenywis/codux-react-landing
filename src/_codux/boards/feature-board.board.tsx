import { createBoard } from '@wixc3/react-board';
import { Features } from '../../components/Features';

export default createBoard({
    name: 'FeatureBoard',
    Board: () => <Features />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1824
    }
});
