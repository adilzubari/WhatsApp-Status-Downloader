import { Dimensions } from "react-native";

var grid1Height = 0;
var grid2Height = 0;

export function getStatusThumbnailWidth() {
    return Dimensions.get('window').width*0.485;
}
export function getScreenPadding() {
    return Dimensions.get('window').width*0.01;
}
function Add_grid1Height(val) {
    grid1Height += val;
}
function Add_grid2Height(val) {
    grid2Height += val;
}
export function ChooseGrid(obj) {
    const grid1ExpectedHeight = grid1Height+obj.height;
    const grid2ExpectedHeight = grid2Height+obj.height;
    // const DifferenceAfterGrid1Selection = grid1ExpectedHeight-grid2Height;
    // const DifferenceAfterGrid2Selection = grid1Height-grid2ExpectedHeight;
    // console.log('grid1ExpectedHeight', grid1ExpectedHeight);
    // console.log('grid2ExpectedHeight', grid2ExpectedHeight);
    // console.log('DifferenceAfterGrid1Selection', DifferenceAfterGrid1Selection);
    // console.log('DifferenceAfterGrid2Selection', DifferenceAfterGrid2Selection);
    // console.log('==================================================');
    if (grid1ExpectedHeight==grid2ExpectedHeight) {
        Add_grid1Height(obj.height);
        // console.log('returning 1');
        return 1;
    } else if (grid1ExpectedHeight<grid2ExpectedHeight){
        Add_grid1Height(obj.height);
        // console.log('returning 1');
        return 1;
    } else if (grid1ExpectedHeight>grid2ExpectedHeight) {
        Add_grid2Height(obj.height);
        // console.log('returning 2');
        return 2;
    }
}
export function GetThumbnailRelativeHeight(ThumbnailDimensions) {
    // actual_width : actual_height :: current_width : current_height*   < using this formulae
    return ( ThumbnailDimensions.current_width / ThumbnailDimensions.actual_width ) * ThumbnailDimensions.actual_height;
}