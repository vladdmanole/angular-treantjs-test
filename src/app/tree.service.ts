import { Injectable } from '@angular/core';
import { TreeNodeChild } from './models/TreeNodeChild';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  nodes: Array<TreeNodeChild> = new Array<TreeNodeChild>();
  nodeIncrementalId = 0;
  nodesChange$: Subject<TreeNodeChild> = new Subject<TreeNodeChild>();

  constructor() {}

  addNode(node: TreeNodeChild) {
    node.id = this.nodeIncrementalId++;
    this.nodes.push(node);
    this.nodesChange$.next(node);
  }
}
