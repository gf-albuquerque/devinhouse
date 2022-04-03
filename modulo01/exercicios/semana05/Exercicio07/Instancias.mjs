import { Pedidos, Produto } from "./Pedidos.mjs";

let produto01 = new Produto("tv", 1100, true, 10);
let produto02 = new Produto("notebook", 3200, true, 5);
let produto03 = new Produto("camera", 5000, true, 3);
let produto04 = new Produto("bicicleta", 800, true, 20);
let produto05 = new Produto("mouse", 100, true, 1000);

let pedido01 = new Pedidos("Gabriel", 20220001);
let pedido02 = new Pedidos("Nana", 20220002);

pedido01.adicionarProduto(produto01);
pedido01.adicionarProduto(produto02);
pedido01.adicionarProduto(produto05);
pedido02.adicionarProduto(produto03);
pedido02.adicionarProduto(produto04);
