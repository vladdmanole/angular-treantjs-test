import { Injectable } from '@angular/core';
import { TreeNodeChild } from './models/TreeNodeChild';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  nodes: Array<TreeNodeChild> = new Array<TreeNodeChild>();
  nodesChange$: Subject<TreeNodeChild> = new Subject<TreeNodeChild>();

  constructor() {}

  addNode(node: TreeNodeChild) {
    this.nodes.push(node);
    this.nodesChange$.next(node);
  }
}
