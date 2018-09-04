import { Injectable } from '@angular/core';
import { TreeNode } from './models/TreeNode';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  nodes: Array<TreeNode> = new Array<TreeNode>();
  nodeIncrementalId = 0;
  nodesChange$: Subject<TreeNode> = new Subject<TreeNode>();

  constructor() {}

  addNode(node: TreeNode) {
    node.id = this.nodeIncrementalId++;
    this.nodes.push(node);
    this.nodesChange$.next(node);
  }
}
