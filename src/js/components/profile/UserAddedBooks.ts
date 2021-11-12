interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(newBook:string): void;
}

class UserAddedBooks implements ISubject {
    public state: string = '';
    private observers: IObserver[] = [];

    public attach(observer: IObserver): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    public detach(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }
    public notify(newBook:string) {
        console.log('Book was added to profile shelf');
        for (const observer of this.observers) {
            observer.update(newBook);
        }
    }
    public addBook(newBook:string): void {
        console.log(`Adding ${newBook} to state`);
        this.state = newBook
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify(newBook);
    }
}

interface IObserver {
    update(newBooks:string):void;  
}

class ProfileBookshelfUpdates implements IObserver {
    private userNewBook: string = '';
    update(newBooks: string): void {
        this.userNewBook = newBooks
    }

}
class UserFeedUpdates implements IObserver {
    private userNewBookPost: string = '';
    update(newBooks: string): string {
        return this.userNewBookPost = "Has added " + newBooks + "to their bookshelf";
    }
    
}


export {}
