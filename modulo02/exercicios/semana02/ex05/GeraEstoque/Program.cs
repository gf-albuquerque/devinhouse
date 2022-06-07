using System;

namespace GeraEstoque // Note: actual namespace depends on the project name.
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Seja bem vindo ao GeraEstoque 1.0");
            Console.WriteLine("---------------------------------");
            Console.WriteLine("");
            Console.WriteLine("1 Cadastrar produto");
            Console.WriteLine("2 Consultar produto");
            Console.WriteLine("3 Modificar produto");
            Console.WriteLine("4 Excluir produto");
            Console.WriteLine("0 Sair");
            Console.WriteLine("");
            Console.Write("Digite a opção: ");
            Console.ReadLine();

        }
    }
}