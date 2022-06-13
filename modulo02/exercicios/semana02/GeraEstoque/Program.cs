using System;

namespace GeraEstoque // Note: actual namespace depends on the project name.
{
    internal class Program
    {
        static void Main(string[] args){
            Menu();
        }

        static void Menu(){
            Console.Clear();
            Console.WriteLine("Seja bem vindo ao GeraEstoque 1.0");
            for (int i = 0; i <= 35; i++){
                Console.Write("-");
            }
            Console.WriteLine("");
            Console.WriteLine("1  Cadastrar produto");
            Console.WriteLine("2  Consultar produto");
            Console.WriteLine("3  Modificar produto");
            Console.WriteLine("4  Excluir produto");
            Console.WriteLine("0  Sair");
            Console.WriteLine("");
            Console.Write("Digite a opção:");
            var option = short.Parse(Console.ReadLine());
            switch (option){

                case 1: CadastroProduto(); break;
                case 2: {
                    Console.Clear();

                    Menu(); break;
                }
                case 3: {
                    Console.Clear();
                    Menu(); break;
                }
                case 4: {
                    Console.Clear();
                    Menu(); break;
                }
                    
                case 0:{
                    Console.Clear();
                    Environment.Exit(0);
                    break;
                }
                default: Menu(); break;
            }
        }
        static void CadastroProduto(){
            Console.Write("Digite um nome de produto:");
            string nome = (Console.ReadLine());
            Console.Write("Digite a quantidade em estoque:");
            int quantidade = int.Parse(Console.ReadLine());
            Console.Write("Digite o valor de compra:");
            float compra = float.Parse(Console.ReadLine());
            Console.Write("Digite o valor de venda:");
            float venda = float.Parse(Console.ReadLine());
            Guid id = Guid.NewGuid();
            Console.WriteLine("");
            Console.WriteLine("Produto cadastrado com sucesso!");
            Console.WriteLine("");
            Console.WriteLine("ID: {0}", id);
            Console.WriteLine("Nome: {0}", nome);
            Console.WriteLine("Qtd: {0}", quantidade);
            Console.WriteLine("R$ Compra: R${0} ", compra);
            Console.WriteLine("R$ Venda: R${0} ", venda);
            
            Console.WriteLine("");
            Console.WriteLine("Pressione qualquer tecla para retornar ao menu.");
            Console.ReadLine();
            Menu();

        }
        
    }
    
}