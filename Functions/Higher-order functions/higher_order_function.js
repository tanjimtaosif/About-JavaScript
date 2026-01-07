function func() {
    return function () {
        console.log('He ran away');
    }
}

func()();