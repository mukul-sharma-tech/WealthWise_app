const chats = [
  {
      tag: "greeting",
      patterns: [
          "Hello",
          "Hi",
          "Hey",
          "Good morning",
          "Good evening",
          "What's up?"
      ],
      responses: [
          "Hello! How can I assist you with your finances today?",
          "Hi! Need help managing your money?",
          "Hey! How can I help you with your financial queries today?"
      ]
  },
  {
      tag: "account_balance",
      "patterns": [
          "What's my account balance?",
          "How much money do I have?",
          "Check my balance",
          "Show my account balance",
          "How much do I have in my account?"
      ],
      responses: [
          "Your account balance is currently [balance]. Would you like to know more details?",
          "You have [balance] in your account. Do you need help with anything else?",
          "Your current balance is [balance]."
      ]
  },
  {
      tag: "recent_transactions",
      patterns: [
          "Show my recent transactions",
          "What did I spend money on?",
          "Recent expenses",
          "View my transaction history",
          "Show me my spending"
      ],
      responses: [
          "Here are your recent transactions: [transaction_list]. Do you want to see more?",
          "Your latest transactions are: [transaction_list]. Need help with anything else?",
          "Here's what you've recently spent: [transaction_list]."
      ]
  },
  {
      tag: "savings",
      patterns: [
          "How much have I saved?",
          "Check my savings",
          "What is my savings balance?",
          "Show my savings account",
          "How much do I have in savings?"
      ],
      responses: [
          "Your savings balance is [savings_balance]. Would you like tips on saving more?",
          "You currently have [savings_balance] in your savings account.",
          "Your savings account balance is [savings_balance]."
      ]
  },
  {
      tag: "investment_status",
      patterns: [
          "How are my investments doing?",
          "Check my investment portfolio",
          "What is the status of my investments?",
          "Show my investment balance",
          "How much profit have I made from investments?"
      ],
      responses: [
          "Your investment portfolio is currently valued at [investment_value]. Would you like to see a detailed breakdown?",
          "Your investments are worth [investment_value] as of today.",
          "Your investment balance is [investment_value]."
      ]
  },
  {
      tag: "loan_status",
      patterns: [
          "What is my loan balance?",
          "How much do I owe on my loan?",
          "Check my loan status",
          "Show my loan details",
          "How much is left to pay on my loan?"
      ],
      responses: [
          "Your outstanding loan balance is [loan_balance]. Do you need help with repayment options?",
          "You owe [loan_balance] on your loan. Would you like to make a payment?",
          "Your current loan balance is [loan_balance]."
      ]
  },
  {
      tag: "budgeting_tips",
      patterns: [
          "Help me budget my money",
          "How can I save more?",
          "Give me some budgeting tips",
          "How to manage my expenses?",
          "I need help with budgeting"
      ],
      responses: [
          "Here are some budgeting tips: Track your expenses, prioritize needs over wants, and set savings goals. Would you like more personalized advice?",
          "Start by categorizing your expenses and setting a monthly budget for each. Need help creating a budget plan?",
          "You can save more by cutting down on non-essential expenses and automating your savings. Want detailed tips?"
      ]
  },
  {
      tag: "goodbye",
      patterns: [
          "Goodbye",
          "See you later",
          "Bye",
          "Take care",
          "I'm done",
          "Thanks, that's all"
      ],
      responses: [
          "Goodbye! If you need help with your finances again, just come back!",
          "See you later! Take care and keep your finances in check!",
          "Bye! Have a great day and happy saving!",
          "Take care! If you have more questions, I'll be here to help!"
      ]
  }
]


module.exports = { data : chats};