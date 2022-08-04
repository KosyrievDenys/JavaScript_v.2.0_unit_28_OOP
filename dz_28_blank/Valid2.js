class Valid2 extends Valid{
	constructor(email, password) {
		super(email, password);
		this.isValid = false;
		this.emailError = '';
		this.passwordError = '';
	}
	validate() {
		if (this.email.length === 0) {
			this.isValid = false;
			this.emailError = 'email empty';
			return this.emailError;
		}
		else if (this.password.length < 6) {
			this.isValid = false;
			this.passwordError = 'min length 6';
			return this.passwordError;
		}
		else {
			this.isValid = true;
			return this.isValid;
		}
	}
}