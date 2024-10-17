export interface MenuItem{
    label: string;
    to: string;
    children? : MenuItem[];
}
 
export interface MenuProps {
    list?: MenuItem[]; 
  }
  
  export interface NavBarProps {
    menu: MenuItem[]; 
  }