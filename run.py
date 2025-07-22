# Math Tutor Program with Error Handling
# This program helps young children practice addition and multiplication

def get_operation_choice():
    """Get the user's choice of operation with error handling"""
    while True:
        try:
            print("\n=== MATH TUTOR ===")
            print("Choose your math practice:")
            print("1. Addition")
            print("2. Multiplication")
            
            choice = input("Enter 1 for addition or 2 for multiplication: ").strip()
            
            if choice == "1":
                return "addition"
            elif choice == "2":
                return "multiplication"
            else:
                print("Please enter only 1 or 2!")
                continue
                
        except KeyboardInterrupt:
            print("\nGoodbye! Keep practicing your math!")
            return None
        except Exception as e:
            print("Something went wrong. Let's try again!")

def get_user_answer(question):
    """Get user's answer with error handling for non-numeric input"""
    while True:
        try:
            answer = input(f"{question} = ")
            # Handle empty input
            if answer.strip() == "":
                print("Please enter a number!")
                continue
            
            # Convert to integer
            return int(answer)
            
        except ValueError:
            print("That's not a valid number! Please enter a whole number.")
        except KeyboardInterrupt:
            print("\nGoodbye! Keep practicing your math!")
            return None

def run_math_practice():
    """Main function to run the math practice program"""
    # The two lists of numbers as specified
    numA = [4, 1, 6, 10, 2, 3, 7, 9, 11, 12, 5, 8]
    numB = [2, 12, 10, 11, 1, 3, 7, 9, 4, 8, 5, 6]
    
    # Get operation choice
    operation = get_operation_choice()
    if operation is None:
        return
    
    # Initialize score tracking
    correct_answers = 0
    total_questions = 12
    
    print(f"\nGreat! Let's practice {operation}!")
    print("Answer each question. Good luck!")
    print("-" * 30)
    
    # Loop through all 12 questions
    for i in range(total_questions):
        num1 = numA[i]
        num2 = numB[i]
        
        # Create question based on operation
        if operation == "addition":
            question = f"Question {i+1}: {num1} + {num2}"
            correct_answer = num1 + num2
        else:  # multiplication
            question = f"Question {i+1}: {num1} × {num2}"
            correct_answer = num1 * num2
        
        # Get user's answer with error handling
        user_answer = get_user_answer(question)
        if user_answer is None:  # User pressed Ctrl+C
            return
        
        # Check if answer is correct
        if user_answer == correct_answer:
            print("✓ Correct! Great job!")
            correct_answers += 1
        else:
            print(f"✗ Not quite right. The correct answer is {correct_answer}")
        
        print()  # Empty line for readability
    
    # Show final results
    print("=" * 40)
    print("PRACTICE SESSION COMPLETE!")
    print(f"You got {correct_answers} out of {total_questions} questions correct!")
    
    # Calculate percentage
    percentage = (correct_answers / total_questions) * 100
    print(f"That's {percentage:.1f}%!")
    
    # Encouraging messages based on performance
    if percentage >= 90:
        print("Outstanding work! You're a math superstar!")
    elif percentage >= 80:
        print("Excellent job! Keep up the great work!")
    elif percentage >= 70:
        print("Good job! You're getting better!")
    elif percentage >= 60:
        print("Nice try! Practice makes perfect!")
    else:
        print("Keep practicing! You'll get better each time!")

def main():
    """Main program function with option to play again"""
    try:
        while True:
            run_math_practice()
            
            # Ask if they want to practice again
            while True:
                try:
                    play_again = input("\nWould you like to practice again? (y/n): ").lower().strip()
                    if play_again in ['y', 'yes']:
                        break
                    elif play_again in ['n', 'no']:
                        print("Thanks for practicing! Keep up the good work!")
                        return
                    else:
                        print("Please enter 'y' for yes or 'n' for no.")
                except KeyboardInterrupt:
                    print("\nGoodbye! Keep practicing your math!")
                    return
                    
    except Exception as e:
        print("An unexpected error occurred. Please restart the program.")

# Run the program
if __name__ == "__main__":
    main()