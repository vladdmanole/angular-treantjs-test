import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../../models/TreeNode';
import { TreeService } from '../../tree.service';

@Component({
  selector: 'app-tree-form',
  templateUrl: './tree-form.component.html',
  styleUrls: ['./tree-form.component.css']
})
export class TreeFormComponent implements OnInit {

  nodeStructure: TreeNode = new TreeNode();
  constructor(public treeService: TreeService) { }

  ngOnInit() {
  }

  private uuidv4() {
    const windowObject: any = window; // avoid typescript error TS2551:Property 'msCrypto' does not exist on type 'Window'
    const cryptoObject: any = windowObject.crypto || windowObject.msCrypto;
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: number) => {
      // tslint:disable-next-line:no-bitwise
      (c ^ cryptoObject.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    }
    );
  }

  onAddNode(node: TreeNode) {
    node.HTMLid = this.uuidv4();
    this.treeService.addNode(node);
    this.nodeStructure = new TreeNode();
  }

}
