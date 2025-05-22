export interface SidebarItemData {
  index: number;
  title: string;
  handleClick: () => void;
}

export class SidebarItem implements SidebarItemData {
  index: number;
  title: string;
  handleClick: () => void;
  constructor(index: number, title: string, handleClick?: () => void) {
    this.index = index
    this.title = title
    this.handleClick = handleClick ? handleClick : () => {}
  }

  clickToAnchor(anchor: string): SidebarItem {
    this.handleClick =  () => {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return this
  }

}
