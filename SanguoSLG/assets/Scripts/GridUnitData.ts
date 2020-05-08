import { GridType } from './GridType'

export class GridUnitData {
    public gridType: GridType;
    public gridPosition: cc.Vec2;
    public localPosition: cc.Vec3;

    public Distance(target: GridUnitData) {
        let rowGap = Math.abs(target.gridPosition.x - this.gridPosition.x);
        let offset = (((rowGap & 1) == 0) ? 0 : 1) + rowGap / 2;
        if(target.gridPosition.y >= (this.gridPosition.y - offset) && (target.gridPosition.y <= (this.gridPosition.y + offset)))
        {
            return rowGap;
        }
        else if(target.gridPosition.y > (this.gridPosition.y + offset))
        {
            return rowGap + (target.gridPosition.y - this.gridPosition.y - offset);
        }
        else
        {
            return rowGap + this.gridPosition.y - offset - target.gridPosition.y;
        }
    };
}