using System;

namespace XuanProj
{
    public class Friend
    {
        // Fields
        public string Name { get; private set; }
        public int Age { get; private set; }
        public string Sex { get; private set; }
        public string Ethnicity { get; private set; }
        public string Major { get; private set; }
        public bool OnGoodTerms { get; private set; }
        public bool InRelationship { get; private set; }
        protected static int NumOfFriends;

        // Constructor
        public Friend(string Name, int Age, string Sex, string Ethnicity, string Major = "Life", bool OnGoodTerms = true)
        {
            this.Name = Name;
            this.Age = Age;
            this.Sex = Sex;
            this.Ethnicity = Ethnicity;
            Console.WriteLine($"{this.Name} has {++NumOfFriends} friends!");
        }
    }

    class Alex
    {
        static void Main()
        {
            Friend Alex = new Friend("Alex Quang", Sex: "Male", Age: 24, Ethnicity: "Vietnamese");
        }
    }
}