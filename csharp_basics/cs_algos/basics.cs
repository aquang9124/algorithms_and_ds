using System;
using System.Collections.Generic;

namespace CsAlgos
{
    public class Basics
    {
        static void Main(string[] args)
        {
            Console.WriteLine(ReverseString("Hello"));
        }

        public static List<int> Print1To255()
        {
            List<int> results = new List<int>();

            for (int i = 1; i < 256; i++)
            {
                Console.WriteLine(i);
                results.Add(i);
            }

            return results;
        }

        public static string ReverseString(string str)
        {
            char[] cArr = str.ToCharArray();
            int left = 0;
            int right = cArr.Length - 1;

            while (left <= right)
            {
                char temp = cArr[left];
                cArr[left] = cArr[right];
                cArr[right] = temp;

                left++;
                right--;
            }

            return string.Join("", cArr);
        }
    }
}