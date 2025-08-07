const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🚀 MehraCodes Portfolio Deployment Helper 🚀\n');

function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
    return false;
  }
}

function buildProject() {
  console.log('\n📦 Building project...');
  return runCommand('npm run build');
}

function deployToNetlify() {
  console.log('\n🔄 Deploying to Netlify...');
  
  // Check if netlify-cli is installed
  try {
    execSync('netlify --version', { stdio: 'ignore' });
  } catch (error) {
    console.log('Installing netlify-cli...');
    runCommand('npm install -g netlify-cli');
  }
  
  // Deploy to Netlify
  return runCommand('netlify deploy --prod');
}

function deployToFirebase() {
  console.log('\n🔥 Deploying to Firebase...');
  
  // Check if firebase-tools is installed
  try {
    execSync('firebase --version', { stdio: 'ignore' });
  } catch (error) {
    console.log('Installing firebase-tools...');
    runCommand('npm install -g firebase-tools');
  }
  
  // Check if user is logged in to Firebase
  console.log('Checking Firebase login status...');
  try {
    execSync('firebase projects:list', { stdio: 'ignore' });
  } catch (error) {
    console.log('Please login to Firebase:');
    runCommand('firebase login');
  }
  
  // Deploy to Firebase
  return runCommand('firebase deploy');
}

function startDeployment() {
  rl.question('Where would you like to deploy? (netlify/firebase/both): ', (answer) => {
    const option = answer.toLowerCase().trim();
    
    if (!['netlify', 'firebase', 'both'].includes(option)) {
      console.log('Invalid option. Please choose netlify, firebase, or both.');
      startDeployment();
      return;
    }
    
    if (!buildProject()) {
      console.log('\n❌ Build failed. Please fix the issues and try again.');
      rl.close();
      return;
    }
    
    if (option === 'netlify' || option === 'both') {
      if (!deployToNetlify()) {
        console.log('\n❌ Netlify deployment failed.');
      } else {
        console.log('\n✅ Netlify deployment successful!');
      }
    }
    
    if (option === 'firebase' || option === 'both') {
      if (!deployToFirebase()) {
        console.log('\n❌ Firebase deployment failed.');
      } else {
        console.log('\n✅ Firebase deployment successful!');
      }
    }
    
    console.log('\n🎉 Deployment process completed!');
    rl.close();
  });
}

startDeployment();