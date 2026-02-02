export interface IButtonComponent {
  id?: string;
  text: string;
  icon: string;
  border: boolean;
  buttonSelectedEnabled: boolean;
  disabled: boolean;
  clickCallback?: Function;
}