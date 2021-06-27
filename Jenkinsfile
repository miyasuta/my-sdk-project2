#!/usr/bin/env groovy

/*
 * This file bootstraps the codified Continuous Delivery pipeline for extensions of SAP solutions such as SAP S/4HANA.
 * The pipeline helps you to deliver software changes quickly and in a reliable manner.
 * A suitable Jenkins instance is required to run the pipeline.
 * The Jenkins can easily be bootstraped using the life-cycle script located inside the 'cx-server' directory.
 *
 * More information on getting started with Continuous Delivery can be found in the following places:
 *   - GitHub repository: https://github.com/SAP/cloud-s4-sdk-pipeline
 *   - Blog Post: https://blogs.sap.com/2017/09/20/continuous-integration-and-delivery
 */

/*
 * Set pipelineVersion to a fixed released version (e.g. "v15") when running in a productive environment.
 * To find out about available versions and release notes, visit: https://github.com/SAP/cloud-s4-sdk-pipeline/releases
 */
@Library('piper-lib-os') _

node(){
  stage('Prepare')   {
      deleteDir()
      checkout scm
      setupCommonPipelineEnvironment script:this
  }

  stage('Build')   {
    buildExecute script:this, npmRunScripts:['ci-build', 'ci-package']
  }

  stage('Integration') {
    npmExecuteScripts script:this, runScripts:['ci-integration-test']
    testsPublishResults script: this, junit:[pattern: '**/backend-integration/*.xml', updateResults: true, archive: true]
  }

  stage('Deploy')   {
      cloudFoundryDeploy script:this, deployTool: 'cf_native'
  }
}
