import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  @Input() public modalContent: any;
  @Input() public buttonType: any;
  @Output() proceedButtonClicked = new EventEmitter<any>();
  public titleContent: string;
  public bodyContent: string;
  public footerSaveButtonContent: string;
  public displayStyle = "none";
  public rowData$: any;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * The function sets the display style, title, body content, footer save button content, and button
   * type for a modal popup.
   * 
   * @param {any} modalContent - an object containing the content to be displayed in the modal,
   * including the title, body, and save button text for footer.
   * 
   * @param {string} buttonType - The buttonType parameter is a string that specifies the type of
   * button.
   */
  openPopup(modalContent: any, buttonType: string, data: any): void {
    this.displayStyle = "block";
    this.titleContent = modalContent.title;
    this.bodyContent = modalContent.body;
    this.footerSaveButtonContent = modalContent.footerSaveButton;
    this.buttonType = buttonType;
    this.rowData$ = data;
  }

  /**
   * The function sets the display style of an element to "none" to close a popup.
   */
  closePopup() {
    this.displayStyle = "none";
  }
  
  /**
   * The function saves changes by emitting a button click event and sets the 
   * display style of an element to "none" to close a popup.
   */
  saveChanges(event: any) {
    this.proceedButtonClicked.emit(this.rowData$);
    this.displayStyle = "none";
  }
}
