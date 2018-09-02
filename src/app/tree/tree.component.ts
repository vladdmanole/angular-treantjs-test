import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { TreeNodeChild } from '../models/TreeNodeChild';
import { TreeService } from '../tree.service';

declare var Treant: any;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponent implements OnInit {

  treant: any;

  private options: any = {
    container: '#treant-id',
    levelSeparation: 20,
    siblingSeparation: 15,
    subTeeSeparation: 15,
    rootOrientation: 'NORTH',
    scrollbar: 'fancy',
    node: {
      HTMLclass: 'treant-class',
      drawLineThrough: false
    },
    connectors: {
      type: 'bCurve',
      style: {
        'stroke-width': 2,
        'stroke': '#ccc'
      }
    },
    animation: {
      nodeSpeed: 500,
    }
  };

  rootNode: TreeNodeChild = {
    text: {
      name: 'ROOT'
    },
    HTMLclass: 'angular',
    HTMLid: 'tree-root',
    image: '/assets/img/angular.png',
  };

  constructor(private treeService: TreeService) {
    this.treeService.nodesChange$.subscribe((node: TreeNodeChild) => {
      const arr = this.constructTreant(this.options, this.treeService.nodes);
      this.treant = new Treant(arr);
    });
  }

  ngOnInit() {
    this.treeService.addNode(this.rootNode);
  }

  // we clone the references of the treeService nodes array and then link the new objects back together
  private constructTreant(options, treeNodes: Array<TreeNodeChild>) {
    let tempArr: any = treeNodes.slice();

    tempArr = tempArr.map(obj => ({ ...obj })); // lose them references
    tempArr.forEach(function (node: TreeNodeChild, i, nodes: Array<TreeNodeChild>) {
      if (node.HTMLid !== 'tree-root') {
        if (node.parent.HTMLid !== 'tree-root') {
          node.parent = nodes.find(function (parent) {
            return node.parent.HTMLid === parent.HTMLid;
          });
        } else {
          node.parent = nodes[0];
        }
      }
    });

    tempArr.unshift(options);
    return tempArr;
  }

}
